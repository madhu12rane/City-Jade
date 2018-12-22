exports.home=function(req,res){
  res.render('home',{title:"home",
                     heading :'Popular Indian Cities'
                     });
}

exports.city=function(req,res){
    var city=req.params.city;
    
    var heading ,title;
    if(city=="mumbai"){
    console.log(city);
      title="MUMBAI";
      heading="MUMBAI CITY";
      city="mumbai";
     
    } else if(city =="bangalore"){
    title="BANGALORE";
    heading="BANGALORE CITY";
    city="bangalore";
    } else if(city =="delhi"){
    title="DELHI";
    heading="DELHI CITY";
    city="delhi";
    }

   res.render('city',{
    title:title,
    heading:heading,
    numberofimage:2,
    city:city
    });

}
