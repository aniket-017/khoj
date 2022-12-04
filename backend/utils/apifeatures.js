class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
      const keyword = this.queryStr.keyword
        ? {
            // Used ternianary operator like if else
            name: {
              $regex: this.queryStr.keyword, //regularexpression
              $options: "i", // forcaseinseititititivity
            },
          }
        : {};
  
      console.log(keyword);
      this.query = this.query.find({ ...keyword });
  
      return this;
    }
  
    filter() {
      const querycopy = { ...this.queryStr };
  
      //        console.log(querycopy);
      //Removing some fields for category
  
      const removeFields = ["keyword", "page", "limit"];
  
      removeFields.forEach((key) => delete querycopy[key]);
  
      //Filter for Price and rating
      //        console.log(querycopy);
  
      let queryStr = JSON.stringify(querycopy);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  
      this.query = this.query.find(JSON.parse(queryStr));
      //        console.log(queryStr);
      return this;
    }
  
    pageination(resultPerPage){
      const currentPage = Number(this.queryStr.page) || 1
  
      const skip = resultPerPage*(currentPage - 1)
  
      this.query = this.query.limit(resultPerPage).skip(skip);
  
      return this;
  
    }
  }
  
  module.exports = ApiFeatures;
  