#!/usr/bin/env python3
"""Build a vertical Instagram reel: talking-head video with panel/conference photo cutaways.

Usage: python3 make_reel.py VIDEO START DURATION [OUT]
  START/DURATION in seconds: the stretch of the talking video to use (~25-35s works best).

Layout: 1.2s venue opener, then the talk with three quick photo cutaways.
Audio from the video runs continuously under everything (no gaps, no captions).
"""
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
W, H, FPS = 1080, 1920, 30
OPENER = 1.2

# photo, crop-x as fraction of the spare width (0=left, 1=right), seconds on screen
PHOTOS = [
    ("01_venue.jpg", 0.5, OPENER),
    ("02_panel_wide.jpg", 0.35, 1.4),
    ("03_panel_speaking.jpg", 0.33, 1.2),
    ("04_panel_listening.jpg", 0.40, 1.2),
]


def main():
    video, start, dur = sys.argv[1], float(sys.argv[2]), float(sys.argv[3])
    out = sys.argv[4] if len(sys.argv) > 4 else str(HERE / "reel.mp4")
    total = OPENER + dur

    # cutaway start times, spread across the talk (relative to reel start)
    cut_times = [OPENER + dur * f for f in (0.27, 0.52, 0.77)]

    inputs = ["-ss", str(max(start - OPENER, 0)), "-t", str(total), "-i", video]
    for name, _, _ in PHOTOS:
        inputs += ["-loop", "1", "-framerate", str(FPS), "-i", str(HERE / "photos" / name)]

    f = []
    # talking video: fill 9:16 frame, slight punch-in for energy
    f.append(
        f"[0:v]scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},"
        f"setsar=1,fps={FPS},format=yuv420p[base]"
    )
    # photos: crop to 9:16 at the chosen position, then a slow push-in (Ken Burns)
    for i, (_, cx, secs) in enumerate(PHOTOS, start=1):
        frames = int(secs * FPS) + 2
        f.append(
            f"[{i}:v]scale=-2:{H*2}:force_original_aspect_ratio=increase,"
            f"scale='max(iw,{W*2})':-2,"
            f"crop={W*2}:{H*2}:(iw-{W*2})*{cx}:(ih-{H*2})/2,"
            f"zoompan=z='1+0.06*on/{frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'"
            f":d={frames}:s={W}x{H}:fps={FPS},setsar=1,format=yuv420p,"
            f"trim=duration={secs}[p{i}]"
        )
    # overlay photos at their times (opener at 0)
    times = [0.0] + cut_times
    prev = "base"
    for i, ((_, _, secs), t) in enumerate(zip(PHOTOS, times), start=1):
        f.append(
            f"[p{i}]setpts=PTS-STARTPTS+{t}/TB[q{i}];"
            f"[{prev}][q{i}]overlay=enable='between(t,{t},{t+secs})':eof_action=pass[v{i}]"
        )
        prev = f"v{i}"
    # quick fade in/out
    f.append(f"[{prev}]fade=t=in:st=0:d=0.25,fade=t=out:st={total-0.4}:d=0.4[vout]")
    f.append(f"[0:a]afade=t=in:st=0:d=0.3,afade=t=out:st={total-0.5}:d=0.5,loudnorm=I=-14:TP=-1.5[aout]")

    cmd = ["ffmpeg", "-y", *inputs, "-filter_complex", ";".join(f),
           "-map", "[vout]", "-map", "[aout]", "-t", str(total),
           "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", out]
    subprocess.run(cmd, check=True)
    print(out)


if __name__ == "__main__":
    main()
