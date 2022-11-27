import React, { useContext, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
const fileTypes = ["JPG", "PNG", "GIF"];


const AddProduct = () => {

    const {user}= useContext(AuthContext)
 
    
    const [imageUrl,setImageUrl] = useState('')
    const [file, setFile] = useState(null);
    const handleChange = (file) => {

        
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ProduckUploadKey}`;
        fetch(url, {
          method: "POST",
          body: file,
        })
          .then((res) => res.json())
          .then(data=>{
            console.log(data)
          })
          .catch(err=>console.error(err.message))
    };

    console.log(file)
// handle form
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data)=>{
    const image = data.image[0]
    const formData = new FormData();
    formData.append("image", image);

  

        // image upload success
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGKEY}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                


 const {title,brand,count,description,location,rating,model,usedTime,condition,phone}=data

const ttsData = {
    
        productInfo: {
          title: title,
          imageUrl: imgData.data.url,
          price: {
            mainPrice: 120,
            resalePrice: 80
          },
          condition: condition,
          brand: brand,
          model: model,
          useTime:usedTime,
          ratings: {
            count: count,
            stars:rating,
          },
          description: description,
        },
        sellerInfo: {
          name: user.displayName,
          email: user.email,
          phone: phone,
          
          location: location
        }
      } 
     fetch(`http://localhost:5000/products`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ttsData),
     }) 
     .then(res=> res.json())
     .then(result=>{
        toast.success("product added successfully")
     })
     .catch(err=> toast.error(err.message))

                
            }
        })
    



  

}


    return (
        <section className="p-6 dark:bg-gray-800 my-10 bg-[main] dark:text-gray-50 mx-auto  bg-[#ddd]">
        <form onSubmit={handleSubmit(handleAddProduct)} novalidate="" action="" className=" flex flex-col mx-auto space-y-12 ng-untouched ng-pristine mx-auto  ng-valid w-2/3 mt-10 bg-[#fff] mb-10">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
               
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label for="firstname" className="text-sm">Product Title</label>
                        <input 
                        {...register("title", {
                            required: "title is Required",
                          })}
                        type="text" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="lastname" className="text-sm">Brand</label>
                        <input
                        {...register("brand", {
                            required: "Name is Required",
                          })}
                        id="Brand" type="text" placeholder="Brand" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                  
                    <div className="col-span-full">
                        <label for="address" className="text-sm">Description</label>
                        <textarea
                        
                        {...register("description", {
                            required: "description is Required",
                          })}

                        id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full">
                        <label for="address" className="text-sm">phone</label>
                        <textarea
                        
                        {...register("phone", {
                            required: "phone is Required",
                          })}

                        id="address" type="number" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="city" className="text-sm">Location</label>
                        <input
                        {...register("location", {
                            required: "location is Required",
                          })}
                        id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="state" className="text-sm">Model</label>
                        <input
                        
                        {...register("model", {
                            required: "model is Required",
                          })}

                        id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="zip" className="text-sm">Use time</label>
                        <input
                        
                        {...register("usedTime", {
                            required: "usedTime is Required",
                          })}

                        id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="city" className="text-sm">Ratings</label>
                        <input
                        {...register("ratings", {
                            required: "rating is Required",
                          })}
                        id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="state" className="text-sm">Count</label>
                        <input
                        {...register("count", {
                            required: "total rating is Required",
                          })}
                        id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full sm:col-span-2">
                        <label for="state" className="text-sm">condition</label>
                        <input
                        {...register("condition", {
                            required: "condition Required",
                          })}
                        id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    
                </div>
               

            </fieldset>
            <div className='mx-auto'>
            <FileUploader  handleChange={handleChange} name="file" types={fileTypes} />
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                id="image"
                name="image"
                accept="image/*"
              />
              {errors.img && (
                <p className="text-primary">{errors.img.message}</p>
              )}
            </div>
            <button type='submit' className='text-center bg-primary py-2 '>Add Products</button>
          
        </form>
    </section>
    );
};

export default AddProduct;