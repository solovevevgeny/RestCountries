
import React from 'react'

import DetailCard from './DetailCard';

const Detail = (data) => {
  const country = data.data;
   

  return (
    <div>
        <DetailCard
            name={country.name.common}
            // nativeName={cntr.name.nativeName.common}
            // // population={cntr.population}
            flag={country.flags.png}
         />
    </div>
  )
}

export default Detail;