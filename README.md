# EpistimisLLC
Group: Joseph Karper, Dima Melnik, Thai Nguyen, Saunder VanWoerden

# How to run
To Launch the site, navigate to the EpistimissLLC folder.\
Then use the following commands:\
npm install\
npm start

# Figma Design
https://www.figma.com/file/0ia0WrbUrXdLhmNNPbrAlv/Epistimis-REAL?type=design&node-id=0-1&mode=design&t=1HgqZaHhhhjmtj27-0

# Demo
https://github.com/nguyenq9/EpistimisLLC/assets/77131873/d2ff3615-f54d-4a33-a6f8-d71c1497d097

# Initial Database Schema
{
  "Jurisduction": [
    {
      "_id": ObjectId(),
      "name": "Jurisduction Name",
      "flag": "URL to flag image",
      "data_privacy_laws": [
        {
          "_id": ObjectId(),
          "law_name": "Law Name",
          "description": "Brief description of the law",
          "effective_date": ISODate("YYYY-MM-DD"),
          "compliance_requirements": [
            {
              "_id": ObjectId(),
              "requirement_name": "Requirement Name",
              "details": "Details about the compliance requirement",
              "links": [
                {
                  "title": "Link Title",
                  "url": "URL to relevant resource"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "_id": ObjectId(),
      "name": "Source Name",
      "url": "URL to source"
    }
  ]
}
