"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[112],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),h=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=h(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=h(a),c=o,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(g,r(r({ref:e},p),{},{components:a})):n.createElement(g,r({ref:e},p))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51033:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(44996);const r={title:"Exploring Data in Superset",hide_title:!0,sidebar_position:2,version:1},s=void 0,l={unversionedId:"creating-charts-dashboards/exploring-data",id:"creating-charts-dashboards/exploring-data",title:"Exploring Data in Superset",description:"",source:"@site/docs/creating-charts-dashboards/exploring-data.mdx",sourceDirName:"creating-charts-dashboards",slug:"/creating-charts-dashboards/exploring-data",permalink:"/superset-doc-zh/docs/creating-charts-dashboards/exploring-data",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/creating-charts-dashboards/exploring-data.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exploring Data in Superset",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Creating Your First Dashboard",permalink:"/superset-doc-zh/docs/creating-charts-dashboards/creating-your-first-dashboard"},next:{title:"Country Map Tools",permalink:"/superset-doc-zh/docs/miscellaneous/country-map-tools"}},h={},p=[{value:"Exploring Data in Superset",id:"exploring-data-in-superset",level:2},{value:"Enabling Data Upload Functionality",id:"enabling-data-upload-functionality",level:3},{value:"Loading CSV Data",id:"loading-csv-data",level:3},{value:"Table Visualization",id:"table-visualization",level:3},{value:"Dashboard Basics",id:"dashboard-basics",level:3},{value:"Pivot Table",id:"pivot-table",level:3},{value:"Line Chart",id:"line-chart",level:3},{value:"Markup",id:"markup",level:3},{value:"Filter Box",id:"filter-box",level:3},{value:"Publishing Your Dashboard",id:"publishing-your-dashboard",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Advanced Analytics",id:"advanced-analytics",level:3},{value:"Rolling Mean",id:"rolling-mean",level:3},{value:"Time Comparison",id:"time-comparison",level:3},{value:"Resampling the data",id:"resampling-the-data",level:3}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"exploring-data-in-superset"},"Exploring Data in Superset"),(0,o.kt)("p",null,"In this tutorial, we will introduce key concepts in Apache Superset through the exploration of a\nreal dataset which contains the flights made by employees of a UK-based organization in 2011. The\nfollowing information about each flight is given:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The traveller\u2019s department. For the purposes of this tutorial the departments have been renamed\nOrange, Yellow and Purple."),(0,o.kt)("li",{parentName:"ul"},"The cost of the ticket."),(0,o.kt)("li",{parentName:"ul"},"The travel class (Economy, Premium Economy, Business and First Class)."),(0,o.kt)("li",{parentName:"ul"},"Whether the ticket was a single or return."),(0,o.kt)("li",{parentName:"ul"},"The date of travel."),(0,o.kt)("li",{parentName:"ul"},"Information about the origin and destination."),(0,o.kt)("li",{parentName:"ul"},"The distance between the origin and destination, in kilometers (km).")),(0,o.kt)("h3",{id:"enabling-data-upload-functionality"},"Enabling Data Upload Functionality"),(0,o.kt)("p",null,"You may need to enable the functionality to upload a CSV or Excel file to your database. The following section\nexplains how to enable this functionality for the examples database."),(0,o.kt)("p",null,"In the top menu, select ",(0,o.kt)("strong",{parentName:"p"},"Data \u2023 Databases"),". Find the ",(0,o.kt)("strong",{parentName:"p"},"examples")," database in the list and\nselect the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," button."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/edit-record.png")}),(0,o.kt)("p",null,"In the resulting modal window, switch to the ",(0,o.kt)("strong",{parentName:"p"},"Extra")," tab and\ntick the checkbox for ",(0,o.kt)("strong",{parentName:"p"},"Allow Data Upload"),". End by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/add-data-upload.png")}),(0,o.kt)("h3",{id:"loading-csv-data"},"Loading CSV Data"),(0,o.kt)("p",null,"Download the CSV dataset to your computer from\n",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache-superset/examples-data/master/tutorial_flights.csv"},"GitHub"),".\nIn the Superset menu, select ",(0,o.kt)("strong",{parentName:"p"},"Data \u2023 Upload a CSV"),"."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/upload_a_csv.png")}),(0,o.kt)("p",null,"Then, enter the ",(0,o.kt)("strong",{parentName:"p"},"Table Name")," as ",(0,o.kt)("em",{parentName:"p"},"tutorial_flights")," and select the CSV file from your computer."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/csv_to_database_configuration.png")}),(0,o.kt)("p",null,"Next enter the text ",(0,o.kt)("em",{parentName:"p"},"Travel Date")," into the ",(0,o.kt)("strong",{parentName:"p"},"Parse Dates")," field."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/parse_dates_column.png")}),(0,o.kt)("p",null,"Leaving all the other options in their default settings, select ",(0,o.kt)("strong",{parentName:"p"},"Save")," at the bottom of the page."),(0,o.kt)("h3",{id:"table-visualization"},"Table Visualization"),(0,o.kt)("p",null,"You should now see ",(0,o.kt)("em",{parentName:"p"},"tutorial_flights")," as a dataset in the ",(0,o.kt)("strong",{parentName:"p"},"Datasets")," tab. Click on the entry to\nlaunch an Explore workflow using this dataset."),(0,o.kt)("p",null,"In this section, we'll create a table visualization\nto show the number of flights and cost per travel class."),(0,o.kt)("p",null,"By default, Apache Superset only shows the last week of data. In our example, we want to visualize all\nof the data in the dataset. Click the ",(0,o.kt)("strong",{parentName:"p"},"Time \u2023 Time Range")," section and change\nthe ",(0,o.kt)("strong",{parentName:"p"},"Range Type")," to ",(0,o.kt)("strong",{parentName:"p"},"No Filter"),"."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/no_filter_on_time_filter.png")}),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply")," to save."),(0,o.kt)("p",null,"Now, we want to specify the rows in our table by using the ",(0,o.kt)("strong",{parentName:"p"},"Group by")," option. Since in this\nexample, we want to understand different Travel Classes, we select ",(0,o.kt)("strong",{parentName:"p"},"Travel Class")," in this menu."),(0,o.kt)("p",null,"Next, we can specify the metrics we would like to see in our table with the ",(0,o.kt)("strong",{parentName:"p"},"Metrics")," option."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"COUNT(*)"),", which represents the number of rows in the table\n(in this case, quantity of flights in each Travel Class)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUM(Cost)"),", which represents the total cost spent by each Travel Class")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/sum_cost_column.png")}),(0,o.kt)("p",null,"Finally, select ",(0,o.kt)("strong",{parentName:"p"},"Run Query")," to see the results of the table."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_table.png")}),(0,o.kt)("p",null,"To save the visualization, click on ",(0,o.kt)("strong",{parentName:"p"},"Save")," in the top left of the screen. In the following modal,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Save as"),"\noption and enter the chart name as Tutorial Table (you will be able to find it again through the\n",(0,o.kt)("strong",{parentName:"li"},"Charts")," screen, accessible in the top menu)."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add To Dashboard")," and enter\nTutorial Dashboard. Finally, select ",(0,o.kt)("strong",{parentName:"li"},"Save & Go To Dashboard"),".")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/save_tutorial_table.png")}),(0,o.kt)("h3",{id:"dashboard-basics"},"Dashboard Basics"),(0,o.kt)("p",null,"Next, we are going to explore the dashboard interface. If you\u2019ve followed the previous section, you\nshould already have the dashboard open. Otherwise, you can navigate to the dashboard by selecting\nDashboards on the top menu, then Tutorial dashboard from the list of dashboards."),(0,o.kt)("p",null,"On this dashboard you should see the table you created in the previous section. Select ",(0,o.kt)("strong",{parentName:"p"},"Edit\ndashboard")," and then hover over the table. By selecting the bottom right hand corner of the table\n(the cursor will change too), you can resize it by dragging and dropping."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/resize_tutorial_table_on_dashboard.png")}),(0,o.kt)("p",null,"Finally, save your changes by selecting Save changes in the top right."),(0,o.kt)("h3",{id:"pivot-table"},"Pivot Table"),(0,o.kt)("p",null,"In this section, we will extend our analysis using a more complex visualization, Pivot Table. By the\nend of this section, you will have created a table that shows the monthly spend on flights for the\nfirst six months, by department, by travel class."),(0,o.kt)("p",null,"Create a new chart by selecting ",(0,o.kt)("strong",{parentName:"p"},"+ \u2023 Chart")," from the top right corner. Choose\ntutorial_flights again as a datasource, then click on the visualization type to get to the\nvisualization menu. Select the ",(0,o.kt)("strong",{parentName:"p"},"Pivot Table")," visualization (you can filter by entering text in the\nsearch box) and then ",(0,o.kt)("strong",{parentName:"p"},"Create New Chart"),"."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/create_pivot.png")}),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Time")," section, keep the Time Column as Travel Date (this is selected automatically as we\nonly have one time column in our dataset). Then select Time Grain to be month as having daily data\nwould be too granular to see patterns from. Then select the time range to be the first six months of\n2011 by click on Last week in the Time Range section, then in Custom selecting a Start / end of 1st\nJanuary 2011 and 30th June 2011 respectively by either entering directly the dates or using the\ncalendar widget (by selecting the month name and then the year, you can move more quickly to far\naway dates)."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/select_dates_pivot_table.png")}),(0,o.kt)("p",null,"Next, within the ",(0,o.kt)("strong",{parentName:"p"},"Query")," section, remove the default COUNT(","*",") and add Cost, keeping the default\nSUM aggregate. Note that Apache Superset will indicate the type of the metric by the symbol on the\nleft hand column of the list (ABC for string, # for number, a clock face for time, etc.)."),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Group by")," select ",(0,o.kt)("strong",{parentName:"p"},"Time"),": this will automatically use the Time Column and Time Grain\nselections we defined in the Time section."),(0,o.kt)("p",null,"Within ",(0,o.kt)("strong",{parentName:"p"},"Columns"),", select first Department and then Travel Class. All set \u2013 let\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Run Query")," to\nsee some data!"),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_pivot_table.png")}),(0,o.kt)("p",null,"You should see months in the rows and Department and Travel Class in the columns. Publish this chart\nto your existing Tutorial Dashboard you created earlier."),(0,o.kt)("h3",{id:"line-chart"},"Line Chart"),(0,o.kt)("p",null,"In this section, we are going to create a line chart to understand the average price of a ticket by\nmonth across the entire dataset."),(0,o.kt)("p",null,"In the Time section, as before, keep the Time Column as Travel Date and Time Grain as month but this\ntime for the Time range select No filter as we want to look at entire dataset."),(0,o.kt)("p",null,"Within Metrics, remove the default ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(*)")," metric and instead add ",(0,o.kt)("inlineCode",{parentName:"p"},"AVG(Cost)"),", to show the mean value."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/average_aggregate_for_cost.png")}),(0,o.kt)("p",null,"Next, select ",(0,o.kt)("strong",{parentName:"p"},"Run Query")," to show the data on the chart."),(0,o.kt)("p",null,"How does this look? Well, we can see that the average cost goes up in December. However, perhaps it\ndoesn\u2019t make sense to combine both single and return tickets, but rather show two separate lines for\neach ticket type."),(0,o.kt)("p",null,"Let\u2019s do this by selecting Ticket Single or Return in the Group by box, and the selecting ",(0,o.kt)("strong",{parentName:"p"},"Run\nQuery")," again. Nice! We can see that on average single tickets are cheaper than returns and that the\nbig spike in December is caused by return tickets."),(0,o.kt)("p",null,"Our chart is looking pretty good already, but let\u2019s customize some more by going to the Customize\ntab on the left hand pane. Within this pane, try changing the Color Scheme, removing the range\nfilter by selecting No in the Show Range Filter drop down and adding some labels using X Axis Label\nand Y Axis Label."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/tutorial_line_chart.png")}),(0,o.kt)("p",null,"Once you\u2019re done, publish the chart in your Tutorial Dashboard."),(0,o.kt)("h3",{id:"markup"},"Markup"),(0,o.kt)("p",null,"In this section, we will add some text to our dashboard. If you\u2019re there already, you can navigate\nto the dashboard by selecting Dashboards on the top menu, then Tutorial dashboard from the list of\ndashboards. Got into edit mode by selecting ",(0,o.kt)("strong",{parentName:"p"},"Edit dashboard"),"."),(0,o.kt)("p",null,"Within the Insert components pane, drag and drop a Markdown box on the dashboard. Look for the blue\nlines which indicate the anchor where the box will go."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/blue_bar_insert_component.png")}),(0,o.kt)("p",null,"Now, to edit the text, select the box. You can enter text, in markdown format (see\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"this Markdown Cheatsheet")," for\nmore information about this format). You can toggle between Edit and Preview using the menu on the\ntop of the box."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/markdown.png")}),(0,o.kt)("p",null,"To exit, select any other part of the dashboard. Finally, don\u2019t forget to keep your changes using\n",(0,o.kt)("strong",{parentName:"p"},"Save changes"),"."),(0,o.kt)("h3",{id:"filter-box"},"Filter Box"),(0,o.kt)("p",null,"In this section, you will learn how to add a filter to your dashboard. Specifically, we will create\na filter that allows us to look at those flights that depart from a particular country."),(0,o.kt)("p",null,"A filter box visualization can be created as any other visualization by selecting ",(0,o.kt)("strong",{parentName:"p"},"+ \u2023 Chart"),",\nand then ",(0,o.kt)("em",{parentName:"p"},"tutorial_flights")," as the datasource and Filter Box as the visualization type."),(0,o.kt)("p",null,"First of all, in the ",(0,o.kt)("strong",{parentName:"p"},"Time")," section, remove the filter from the Time range selection by selecting\nNo filter."),(0,o.kt)("p",null,"Next, in ",(0,o.kt)("strong",{parentName:"p"},"Filters Configurations")," first add a new filter by selecting the plus sign and then edit\nthe newly created filter by selecting the pencil icon."),(0,o.kt)("p",null,"For our use case, it makes most sense to present a list of countries in alphabetical order. First,\nenter the column as Origin Country and keep all other options the same and then select ",(0,o.kt)("strong",{parentName:"p"},"Run\nQuery"),". This gives us a preview of our filter."),(0,o.kt)("p",null,"Next, remove the date filter by unchecking the Date Filter checkbox."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/filter_on_origin_country.png")}),(0,o.kt)("p",null,"Finally, select ",(0,o.kt)("strong",{parentName:"p"},"Save"),", name the chart as Tutorial Filter, add the chart to our existing Tutorial\nDashboard and then Save & go to dashboard. Once on the Dashboard, try using the filter to show only\nthose flights that departed from the United Kingdom \u2013 you will see the filter is applied to all of\nthe other visualizations on the dashboard."),(0,o.kt)("h3",{id:"publishing-your-dashboard"},"Publishing Your Dashboard"),(0,o.kt)("p",null,"If you have followed all of the steps outlined in the previous section, you should have a dashboard\nthat looks like the below. If you would like, you can rearrange the elements of the dashboard by\nselecting ",(0,o.kt)("strong",{parentName:"p"},"Edit dashboard")," and dragging and dropping."),(0,o.kt)("p",null,"If you would like to make your dashboard available to other users, simply select Draft next to the\ntitle of your dashboard on the top left to change your dashboard to be in Published state. You can\nalso favorite this dashboard by selecting the star."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/publish_dashboard.png")}),(0,o.kt)("h3",{id:"annotations"},"Annotations"),(0,o.kt)("p",null,"Annotations allow you to add additional context to your chart. In this section, we will add an\nannotation to the Tutorial Line Chart we made in a previous section. Specifically, we will add the\ndates when some flights were cancelled by the UK\u2019s Civil Aviation Authority in response to the\neruption of the Gr\xedmsv\xf6tn volcano in Iceland (23-25 May 2011)."),(0,o.kt)("p",null,"First, add an annotation layer by navigating to Manage \u2023 Annotation Layers. Add a new annotation\nlayer by selecting the green plus sign to add a new record. Enter the name Volcanic Eruptions and\nsave. We can use this layer to refer to a number of different annotations."),(0,o.kt)("p",null,"Next, add an annotation by navigating to Manage \u2023 Annotations and then create a new annotation by\nselecting the green plus sign. Then, select the Volcanic Eruptions layer, add a short description\nGr\xedmsv\xf6tn and the eruption dates (23-25 May 2011) before finally saving."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/edit_annotation.png")}),(0,o.kt)("p",null,"Then, navigate to the line chart by going to Charts then selecting Tutorial Line Chart from the\nlist. Next, go to the Annotations and Layers section and select Add Annotation Layer. Within this\ndialogue:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name the layer as Volcanic Eruptions"),(0,o.kt)("li",{parentName:"ul"},"Change the Annotation Layer Type to Event"),(0,o.kt)("li",{parentName:"ul"},"Set the Annotation Source as Superset annotation"),(0,o.kt)("li",{parentName:"ul"},"Specify the Annotation Layer as Volcanic Eruptions")),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/annotation_settings.png")}),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Apply")," to see your annotation shown on the chart."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/annotation.png")}),(0,o.kt)("p",null,"If you wish, you can change how your annotation looks by changing the settings in the Display\nconfiguration section. Otherwise, select ",(0,o.kt)("strong",{parentName:"p"},"OK")," and finally ",(0,o.kt)("strong",{parentName:"p"},"Save")," to save your chart. If you keep\nthe default selection to overwrite the chart, your annotation will be saved to the chart and also\nappear automatically in the Tutorial Dashboard."),(0,o.kt)("h3",{id:"advanced-analytics"},"Advanced Analytics"),(0,o.kt)("p",null,"In this section, we are going to explore the Advanced Analytics feature of Apache Superset that\nallows you to apply additional transformations to your data. The three types of transformation are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting up the base chart")),(0,o.kt)("p",null,"In this section, we\u2019re going to set up a base chart which we can then apply the different ",(0,o.kt)("strong",{parentName:"p"},"Advanced\nAnalytics")," features to. Start off by creating a new chart using the same ",(0,o.kt)("em",{parentName:"p"},"tutorial_flights"),"\ndatasource and the ",(0,o.kt)("strong",{parentName:"p"},"Line Chart")," visualization type. Within the Time section, set the Time Range as\n1st October 2011 and 31st October 2011."),(0,o.kt)("p",null,"Next, in the query section, change the Metrics to the sum of Cost. Select ",(0,o.kt)("strong",{parentName:"p"},"Run Query")," to show the\nchart. You should see the total cost per day for each month in October 2011."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/advanced_analytics_base.png")}),(0,o.kt)("p",null,"Finally, save the visualization as Tutorial Advanced Analytics Base, adding it to the Tutorial\nDashboard."),(0,o.kt)("h3",{id:"rolling-mean"},"Rolling Mean"),(0,o.kt)("p",null,"There is quite a lot of variation in the data, which makes it difficult to identify any trend. One\napproach we can take is to show instead a rolling average of the time series. To do this, in the\n",(0,o.kt)("strong",{parentName:"p"},"Moving Average")," subsection of ",(0,o.kt)("strong",{parentName:"p"},"Advanced Analytics"),", select mean in the ",(0,o.kt)("strong",{parentName:"p"},"Rolling")," box and\nenter 7 into both Periods and Min Periods. The period is the length of the rolling period expressed\nas a multiple of the Time Grain. In our example, the Time Grain is day, so the rolling period is 7\ndays, such that on the 7th October 2011 the value shown would correspond to the first seven days of\nOctober 2011. Lastly, by specifying Min Periods as 7, we ensure that our mean is always calculated\non 7 days and we avoid any ramp up period."),(0,o.kt)("p",null,"After displaying the chart by selecting ",(0,o.kt)("strong",{parentName:"p"},"Run Query")," you will see that the data is less variable\nand that the series starts later as the ramp up period is excluded."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/rolling_mean.png")}),(0,o.kt)("p",null,"Save the chart as Tutorial Rolling Mean and add it to the Tutorial Dashboard."),(0,o.kt)("h3",{id:"time-comparison"},"Time Comparison"),(0,o.kt)("p",null,"In this section, we will compare values in our time series to the value a week before. Start off by\nopening the Tutorial Advanced Analytics Base chart, by going to ",(0,o.kt)("strong",{parentName:"p"},"Charts")," in the top menu and then\nselecting the visualization name in the list (alternatively, find the chart in the Tutorial\nDashboard and select Explore chart from the menu for that visualization)."),(0,o.kt)("p",null,"Next, in the Time Comparison subsection of ",(0,o.kt)("strong",{parentName:"p"},"Advanced Analytics"),", enter the Time Shift by typing in\n\u201cminus 1 week\u201d (note this box accepts input in natural language). Run Query to see the new chart,\nwhich has an additional series with the same values, shifted a week back in time."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/time_comparison_two_series.png")}),(0,o.kt)("p",null,"Then, change the ",(0,o.kt)("strong",{parentName:"p"},"Calculation type")," to Absolute difference and select ",(0,o.kt)("strong",{parentName:"p"},"Run Query"),". We can now\nsee only one series again, this time showing the difference between the two series we saw\npreviously."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/time_comparison_absolute_difference.png")}),(0,o.kt)("p",null,"Save the chart as Tutorial Time Comparison and add it to the Tutorial Dashboard."),(0,o.kt)("h3",{id:"resampling-the-data"},"Resampling the data"),(0,o.kt)("p",null,"In this section, we\u2019ll resample the data so that rather than having daily data we have weekly data.\nAs in the previous section, reopen the Tutorial Advanced Analytics Base chart."),(0,o.kt)("p",null,"Next, in the Python Functions subsection of ",(0,o.kt)("strong",{parentName:"p"},"Advanced Analytics"),", enter 7D, corresponding to seven\ndays, in the Rule and median as the Method and show the chart by selecting ",(0,o.kt)("strong",{parentName:"p"},"Run Query"),"."),(0,o.kt)("img",{src:(0,i.Z)("/img/tutorial/resample.png")}),(0,o.kt)("p",null,"Note that now we have a single data point every 7 days. In our case, the value showed corresponds to\nthe median value within the seven daily data points. For more information on the meaning of the\nvarious options in this section, refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.resample.html"},"Pandas documentation"),"."),(0,o.kt)("p",null,"Lastly, save your chart as Tutorial Resample and add it to the Tutorial Dashboard. Go to the\ntutorial dashboard to see the four charts side by side and compare the different outputs."))}d.isMDXComponent=!0}}]);