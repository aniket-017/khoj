class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
      const keyword = this.queryStr.keyword
        ? {
          $or: [
            {
            // Used ternianary operator like if else
            name: {
              $regex: this.queryStr.keyword, //regularexpression
              $options: "i", // forcaseinseititititivity
            },
          },
          {
            Address: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          },
          {
            category: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          },
          // {
          //   price: {
          //     $eq: this.queryStr.keyword,
          //   },
          // },
          {
            ContactNo: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          },
        ],
           
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
  
      const removeFields = ["keyword", "page", "limit", "category"];
  
      removeFields.forEach((key) => delete querycopy[key]);
  
      //Filter for Price and rating
      //        console.log(querycopy);
  
      let queryStr = JSON.stringify(querycopy);
      queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  
      this.query = this.query.find(JSON.parse(queryStr));
      //        console.log(queryStr);


       // Filter by category if it exists in the query string
  if (this.queryStr.category) {
    const categories = this.queryStr.category.split(",");
    queryStr = JSON.stringify({ ...JSON.parse(queryStr), category: { $in: categories } });
  }

  this.query = this.query.find(JSON.parse(queryStr));

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
  