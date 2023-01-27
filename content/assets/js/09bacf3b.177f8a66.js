"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[54906],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(o),g=n,h=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return o?r.createElement(h,a(a({ref:t},s),{},{components:o})):r.createElement(h,a({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:n,a[1]=d;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2255:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},a=void 0,d={unversionedId:"gcp_bigquery",id:"version-0.12.2/gcp_bigquery",title:"Google BigQuery",description:"Hudi tables can be queried from Google Cloud BigQuery as external tables. As of",source:"@site/versioned_docs/version-0.12.2/gcp_bigquery.md",sourceDirName:".",slug:"/gcp_bigquery",permalink:"/docs/gcp_bigquery",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/gcp_bigquery.md",tags:[],version:"0.12.2",frontMatter:{title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/docs/syncing_metastore"},next:{title:"Bootstrapping",permalink:"/docs/migration_guide"}},c=[{value:"Configurations",id:"configurations",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],l={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hudi tables can be queried from ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"Google Cloud BigQuery")," as external tables. As of\nnow, the Hudi-BigQuery integration only works for hive-style partitioned Copy-On-Write tables."),(0,n.kt)("h2",{id:"configurations"},"Configurations"),(0,n.kt)("p",null,"Hudi uses ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncTool")," to sync tables. It works with ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," via\nsetting sync tool class. A few BigQuery-specific configurations are required."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.project_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The target Google Cloud project")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_name")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery dataset name; create before running the sync tool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_location")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region info of the dataset; same as the GCS bucket that stores the Hudi table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A wildcard path pattern pointing to the first level partition; make sure to include the partition key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri_prefix")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The common prefix of the ",(0,n.kt)("inlineCode",{parentName:"td"},"source_uri"),", usually it's the path to the Hudi table, trailing slash does not matter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.base_path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The usual basepath config for Hudi table.")))),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncConfig")," for the complete configuration list."),(0,n.kt)("p",null,"In addition to the BigQuery-specific configs, set the following Hudi configs to write the Hudi table in the desired way."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"hoodie.datasource.write.hive_style_partitioning = 'true'\nhoodie.datasource.write.drop.partition.columns  = 'true'\nhoodie.partition.metafile.use.base.format       = 'true'\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Below shows an example for running ",(0,n.kt)("inlineCode",{parentName:"p"},"BigQuerySyncTool")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"spark-submit --master yarn \\\n--packages com.google.cloud:google-cloud-bigquery:2.10.4 \\\n--jars /opt/hudi-gcp-bundle-0.12.1.jar \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.12.1.jar \\\n--target-base-path gs://my-hoodie-table/path \\\n--target-table mytable \\\n--table-type COPY_ON_WRITE \\\n--base-file-format PARQUET \\\n# ... other deltastreamer options\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.gcp.bigquery.BigQuerySyncTool \\\n--hoodie-conf hoodie.deltastreamer.source.dfs.root=gs://my-source-data/path \\\n--hoodie-conf hoodie.gcp.bigquery.sync.project_id=hudi-bq \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_name=rxusandbox \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_location=asia-southeast1 \\\n--hoodie-conf hoodie.gcp.bigquery.sync.table_name=mytable \\\n--hoodie-conf hoodie.gcp.bigquery.sync.base_path=gs://rxusandbox/testcases/stocks/data/target/${NOW} \\\n--hoodie-conf hoodie.gcp.bigquery.sync.partition_fields=year,month,day \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri=gs://my-hoodie-table/path/year=* \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri_prefix=gs://my-hoodie-table/path/ \\\n--hoodie-conf hoodie.gcp.bigquery.sync.use_file_listing_from_metadata=true \\\n--hoodie-conf hoodie.gcp.bigquery.sync.assume_date_partitioning=false \\\n--hoodie-conf hoodie.datasource.hive_sync.mode=jdbc \\\n--hoodie-conf hoodie.datasource.hive_sync.jdbcurl=jdbc:hive2://localhost:10000 \\\n--hoodie-conf hoodie.datasource.hive_sync.skip_ro_suffix=true \\\n--hoodie-conf hoodie.datasource.hive_sync.ignore_exceptions=false \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydataset \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=mykey \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=year,month,day \\\n--hoodie-conf hoodie.datasource.write.precombine.field=ts \\\n--hoodie-conf hoodie.datasource.write.keygenerator.type=COMPLEX \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.write.drop.partition.columns=true \\\n--hoodie-conf hoodie.partition.metafile.use.base.format=true \\\n--hoodie-conf hoodie.metadata.enable=true \\\n")),(0,n.kt)("p",null,"After run, the sync tool will create 2 tables and 1 view in the target dataset in BigQuery. The tables and the view\nshare the same name prefix, which is taken from the Hudi table name. Query the view for the same results as querying the\nCopy-on-Write Hudi table."))}s.isMDXComponent=!0}}]);