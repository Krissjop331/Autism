import React from 'react'
import './ForumBlock.css'
import { ForumItem } from '../forumItem/ForumItem'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const ForumBlock = () => {
  const {forums} = useSelector(state => state.forum)
  const navigate = useNavigate();
  return (
    <div className='forumBlock'>
        <div className="wrapper">
            <h2>Forum</h2>
            <div className="forumCards">

            {forums.map(item => 
                <ForumItem key={item.id} item={item} />
            )}

            </div>
        </div>
    </div>
  )
}
