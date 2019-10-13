import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../component/PreviewCompatibleImage'



const FeatureGrid = ( gridItems ) => (
  

  <div className="columns is-multiline">
  {console.log(gridItems.gridItems)}
      {gridItems.gridItems.map(item => ( 
      
      
      <div key={item.text} className="column is-6">
        <section className="section">
        {console.log(item)} 
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
