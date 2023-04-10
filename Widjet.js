import React from 'react';
import './Widjet.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widjet() {

    // creates new article
    const newsArticle = (heading, suibtitle) =>(
        <div className='widjet__article'>
            <div className='widjet__articleleft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widjet__articleright'>
                <h4>{heading}</h4>
                <p>{suibtitle}</p>
            </div>

        </div>
    )

  return (
    <div className='widjet'>
        <div className='widjet__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle('King CJ is back', 'Latest News - 500 readers')}
        {newsArticle('King CJ is back', 'Latest News - 500 readers')}
        {newsArticle('King CJ is back', 'Latest News - 500 readers')}
        {newsArticle('King CJ is back', 'Latest News - 500 readers')}
        {newsArticle('King CJ is back', 'Latest News - 500 readers')}
    </div>
  )
}

export default Widjet