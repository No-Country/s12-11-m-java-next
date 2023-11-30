import RegisterSuccess from '@/components/RegisterSuccess/RegisterSuccess'
import React from 'react'
import db from '../../../utils/Components'
const pageRegisterSuccess = () => {



    const data = db.slice(0, 4)
    return (


        data.map(res => <RegisterSuccess key={res.numero} />)



    )
}

export default pageRegisterSuccess