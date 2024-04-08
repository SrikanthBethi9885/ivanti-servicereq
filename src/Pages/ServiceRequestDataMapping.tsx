import React from 'react'

const ServiceRequestDataMapping = () => {
    return (
        <div className='flex gap-2'>
            <div className=' bg-gray-200 h-screen w-1/2 '>
                <h1 className='text-teal-700 text-center text-lg font-semibold '>Service Request Data Mapping Fields For MCPC </h1>
                <ol className='text-center font-semibold mt-4 text-teal-600'>
                    <li>SNTaskNo</li>
                    <li>SNTicketNo</li>
                    <li>Customer</li>
                    <li>Type</li>
                    <li>Status</li>
                    <li>Description</li>
                    <li>UserName</li>
                    <li>UserPhone</li>
                    <li>UserEmail</li>
                    <li>UserAddress1</li>
                    <li>UserCity</li>
                    <li>UserState</li>
                    <li>UserZipcode</li>
                    <li>ShippingMethod</li>
                    <li>Priority</li>
                    <li>PONumber</li>
                    <li>Location</li>
                    <li>ProvisioningNeeded</li>
                    <li>TechDispatchNeeded</li>
                    <li>DispositionNeeded</li>
                    <li>products</li>
                </ol>
            </div>
            <div className=' bg-gray-200 h-screen w-1/2'>
                <h1 className='text-teal-700 text-center text-lg font-semibold'>Service Request Data Mapping Fields For FNB</h1>
                <ul className='text-center font-semibold mt-4 text-teal-600 '>
                    <li>RecId</li>
                    <li>ServiceReqNumber</li>
                    <li>FNB</li>
                    <li>Service</li>
                    <li>Active</li>
                    <li>Symptom</li>
                    <li>Recipient</li>
                    <li>RecipientPhone</li>
                    <li>RequestorEmail</li>
                    <li>RecipientAddress</li>
                    <li>city</li>
                    <li>state</li>
                    <li>zip</li>
                    <li className='text-red-500'>Null</li>
                    <li>low</li>
                    <li className='text-red-500'>Null</li>
                    <li>CustomerLocation</li>
                    <li className='text-red-500'>Null</li>
                    <li className='text-red-500'>Null</li>
                    <li className='text-red-500'>Null</li>
                    <li>LaptopList</li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceRequestDataMapping
