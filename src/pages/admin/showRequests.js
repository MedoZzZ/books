import React from 'react';
import {readersData} from './../../core/data/requests'
import Empty from "../product/components/empty";
import Rq from '../admin/requests';
import '../../pages/product/style/requests.css'
const ShowRequests = ()=>{
    const items = readersData
    const displayRequest = ()=>{
        return items.map((item) =>{
            return <Rq 
                id = {item.id}
                readername = {item.name}
                bookid = {item.bookID}
                bookname = {item.bookName}
                />
    })
    }
    return (
        <div className="request-list">{
            items.length > 0 ?
            displayRequest()
            :
            <Empty />
        }
        </div>
    )    
}
export default ShowRequests;