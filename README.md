This is an Angular 8 application with .NET Core 3 backend that displays tabular data in an Angular Material table. It's built with:

- Angular 8

- ngrx (state, store, effects, actions, reducers)

- Angular Material Table

- Angular Material Paginator with server-side pagination

- routed pagination, i. e. each page is accessible by a route <resource_collection>/<page_number>/size/<page_size>


The data this application displays is a log of website visits, collected by StatCounter, my favorite website statistics tracking application. For a long time I have been downloading visit statistics for my various websites from StatCounter as .csv files. I have imported those CSV files into a database in a separate (I wrote a separate program for that), and I wrote this application to read from the database and display that data in ways that are convenient and interesting to me.

The application is currently running at http://elzecode.com/visitsnc3ng/ . It is pretty barebones at this point, but I'm adding more features to it.

I wrote a couple of blog articles about the problems I overcome while building and deploying it:

<a href="https://blog.geekitude.com/2020/07/05/the-mysterious-angular-couple-base-href-and-deploy-url/">Deployment issues that arise if your application runs in a subdirectory, and how to fix them.</a>

<a href="https://blog.geekitude.com/2020/07/07/angular-base-href-and-parametrized-routes/">A sequel to above: additional gotchas with parameterized Angular routes when your application runs in a subdirectory.</a>
