Tab strip for switching views — underline (default) or pill.

```jsx
<Tabs tabs={["Latest","Popular","Build logs"]} onChange={setView} />
<Tabs variant="pill" tabs={[{id:"all",label:"All",count:42},{id:"ai",label:"AI apps",count:12}]} defaultValue="all" />
```
