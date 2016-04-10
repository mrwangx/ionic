/**
 * Created by zhoupan on 2015/9/23.
 */
dbconfig = {
    basePath:'http://127.0.0.1/',
    login:"app",
   pagination:{
       pageSize:10,
       currentPage:1
   }

};
var formatDate = function(data) {
  return $.param(data);
};
  postFormat = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    transformRequest: formatDate
  };
