import React from 'react'

const DetailCard = ({name, flag}) => {
  return (
    <section>
        <div className="container detail-card">
            <div className="detail-card__flag">
                <img src={flag} alt="" width="100%"/>
            </div>

            <div className="detail-card__info">
                <h3>{name}</h3>
            </div>
        </div>

    </section>
  )
}
export default DetailCard;