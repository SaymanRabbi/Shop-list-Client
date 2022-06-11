import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {deleteitem,edit} from './Actions/index'
import { useDispatch } from 'react-redux';

const ShopList = ({ data }) => {
    const dispatch = useDispatch()
    const { area, shopname, category, closingdate, openingdate, id } = data.data
    console.log(data)
    return (
        <div className=' bg-primary p-3 rounded'>
            <h2 className='text-xl uppercase text-white'>Shop Name: {shopname}</h2>
            <h2 className=' uppercase text-white'>Area: {area}</h2>
            <h2 className=' uppercase text-white'>Category: {category}</h2>
            <div>
                <p className='text-white'><span className=' uppercase'>opening date</span>: {openingdate}</p>
                <p className='text-white'><span className=' uppercase'>closing date</span>: {closingdate}</p>
                
             </div>
            <div className='flex gap-3 mt-3'>
                <button className='btn btn-sm flex gap-2' onClick={()=>dispatch(deleteitem(data.id))}>Delete<FontAwesomeIcon className=' text-white' icon={faTrash} /></button>
             </div>
        </div>
    );
};

export default ShopList;