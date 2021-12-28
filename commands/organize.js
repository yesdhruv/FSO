// organize function
function organizeFn(dirPath){
    // console.log("Tree command implemented", dirPath);  
     // 1.Input -> directory path given 
     let destPath;
     if(dirPath == undefined)
     {
         destPath = process.cwd();
         return;
     }else{
         let doesExist = fs.existsSync(dirPath);
         if(doesExist)
         {
              // 2. create ->organised_files ka folder ->directory
               destPath =  path.join(dirPath,"orgainsed_files");
              if(fs.existsSync(destPath) == false)
                 fs.mkdirSync(destPath);
         }else{
 
         console.log("Kindly enter any Input");
         return;
 
         }
     }
     organizeHelper(dirPath , destPath); 
 }
 function organizeHelper(src , dest){
     // 3. Identify cateogories of all the files present inthtat input direc ->
     let childNames = fs.readdirSync(src);
     //console.log(childNames);
     for(let i=0 ;i<childNames.length;i++)
     {
         let childAddress = path.join(src,childNames[i]);
         let isFile  = fs.lstatSync(childAddress).isFile();
         if(isFile){
            // console.log(childNames[i]);
            let category  = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to -->",category);
         //4. copy/cut files to that oraginsed folder/direc. inside any of catogery folder
               sendFiles(childAddress,dest,category);
         }
     }
 }
 function sendFiles(srcFilePath,dest,category){
     let categoryPath = path.join(dest,category);
     if(fs.existsSync(categoryPath) == false){
         fs.mkdirSync(categoryPath);
     }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
 
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"Copied to ",category);
 
 }
 function getCategory(name)
 {
 let ext = path.extname(name);
 ext = ext.slice(1);
  for(let type in types){
     let cTypeArray =  types[type];
     for(let i=0 ;i<cTypeArray.length ;i++)
     {
         if(ext == cTypeArray[i])
         return type;
     }
  }
  return "others";
 }
 module.exports = {
    organizeKey: organizeFn
}