# Cloud-Resume
Background:
This Resume/Website was inspired by Forrest Brazeal's Cloud Resume Challenge and has served as a productive project in building both frontend and backend infrastructure hosted within AWS. For anyone interested in cloud engineering, I highly recommend it.


Architecture:
This website is hosted and was built on AWS with a number of services including all of those listed at the bottom of this page. To provide a quick overview, this website/its files are hosted within an AWS S3 bucket which uses Cloudfront to act as a CDN while simultaneously leveraging Route53 for domain name resolution. If you look at the main page, you will also notice a visitor counter. This counter tracks the total number of visits to this page through a database hosted in DynamoDB. Every time this page is accessed, a POST request is sent to an API which triggers a script in AWS's Lambda to increment the value within a table within a DynamoDB Database. The POST request then returns updated value in its response which is then extracted with javascript and displayed on the home page.
