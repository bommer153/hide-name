async function insertData(itemData){
   try{
   const response = fetch(URL,{
      header:{
        content-type:application/json,
        x-master-key: {key}
      },
      body:itemData.json().stringfy;
   });
  
      const data = await response.json(); 
      return data;  
   }
   catch(error){
      throw Error(error);
   }
}

async function fetchData(){
  try{
     const response = fetch(URL);
     const data = await response.json();
     return data;
  }catch(error){
     throw Error(error);
  }
}

function addItem(item){
  const itemData = {
     name : item.name,
     price : item.price,
     description : item.description,
  }
  insertData(itemData);
}

function updateData(id){
   
}