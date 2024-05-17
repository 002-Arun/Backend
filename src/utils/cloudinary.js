import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
          
cloudinary.config({ 
  cloud_name: 'daekaglyk', 
  api_key: '646286549451343', 
  api_secret: 'tlhE31oiQ91L2XDPTKDRQ_B3oIU' 
});

const uploadFileOnCloudinary = async  (filePath) => {
   try {
      if(!filePath) return null;
     const response =   await cloudinary.uploader.upload((filePath), {
        resource_type : 'auto'
      })
      fs.unlinkSync(filePath)
      return response;
   } catch (error) {
      fs.unlinkSync(filePath)
      return null;
   }
}

export {uploadFileOnCloudinary}

