# Spoken To Written English Converter
------------------------------------
> A RESTful API to convert spoken english to written english. Ex: five dollars is converted to 5$

# Usage
_______

* Clone the repo using `[git clone ](https://github.com/itsmepvr/spokenToWrittenEnglishConverter.git)`
* Go into the directory `cd spokenToWrittenEnglishConverter`
* Install required dependencies `npm install`
* Run `node index.js`
* Server will be running at `localhost:8081`
* Open Postman application and post data with json data `{"spoken_english": "Any sentence or paragraph that you want to convert to written english. Ex: triple a"}`
* Will return a json object 
  `{
      "spoken_english": "Any sentence or paragraph that you want to convert to written english. Ex: triple a",
      "written_english": "Any sentence or paragraph that you want to convert to written english. Ex: aaa"
  }`