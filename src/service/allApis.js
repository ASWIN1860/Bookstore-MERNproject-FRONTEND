import commonApi from "./commonApi";
import base_Url from "./baseUrl";

// signup api request
export const signupApi=async(data)=>{
    return await commonApi(`${base_Url}/signup`,'POST',data,'')
}

//signin api 
export const signinApi=async(data)=>{
    return await commonApi(`${base_Url}/signin`,'POST',data,'')
}

//GOOGLE SIGNIN API
export const googlesigninApi=async(data)=>{
    return await commonApi(`${base_Url}/google-login`,'POST',data,'')
}

//Authorized user based apis


//Add Book Api
export const addbookApi=async (data)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem("token")}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${base_Url}/add-book`,'POST',data,header)
} 

//All books API
export const allBooksApi=async (search)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/all-books?search=${search}`,'GET',{},header)
}

//getBookById Api
export const getBookByIdApi=async (id)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/getbookbyid/${id}`,"GET",{},header)
}

//getLatestBook Api
export const getLatestBookApi=async()=>{
   
    return await commonApi(`${base_Url}/latestbook`,'GET',{})
}

//get user added books api
export const getUserBooksApi=async()=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/user-books`,'GET',{},header)
}

//remove user book by id api
export const removeUserBooksApi=async(id)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/getbook/${id}/delete`,'DELETE',{},header)
}

//get user bought books api
export const getBoughtBooksApi=async()=>{
     const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/bought-books`,'GET',{},header)
}

//get profile details of user
export const getProfileApi=async()=>{
     const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/get-profile`,'GET',{},header)
}

//profile update 
export const profileUpdateApi=async(data)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem("token")}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${base_Url}/profile-update`,'PUT',data,header)
}

// ** Admin Based APIs **

// get all books for admin api
export const getAllAdminBooksApi = async () => {
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/get-books`, 'GET', {}, header)
}

// get all users for admin api
export const getAdminAllUsersApi = async () => {
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/get-users`, 'GET', {}, header)
}

//approve book
export const adminApproveBookApi=async(id)=>{
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/approve-book/${id}`,'PATCH',{},header)
}

//add job post 
export const adminAddJobPostApi=async(data)=>{
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/add-job`,'POST',data,header)
}

//list job post 
export const adminListJobPostAPi=async(search)=>{
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/list-jobpost?search=${search}`,'GET',{},header)
}

//delete job post 
export const adminDeleteJobPostApi=async(id)=>{
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_Url}/admin/delete-jobpost/${id}`,'DELETE',{},header)
}