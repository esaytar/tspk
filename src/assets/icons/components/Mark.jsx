import React from 'react'

export default function Mark({fill}) {
  return (
    <svg className={`${fill} min-w-[15px]`} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.47399 15.0051L6.03832 14.6316C5.43771 14.1287 0.193359 9.5995 0.193359 6.28649C0.193359 2.8178 3.0053 0.00585938 6.47399 0.00585938C9.94269 0.00585938 12.7546 2.8178 12.7546 6.28649C12.7546 9.59953 7.51028 14.1287 6.91216 14.6341L6.47399 15.0051ZM6.47399 1.36392C3.75662 1.36699 1.55452 3.56909 1.55145 6.28647C1.55145 8.36777 4.77797 11.6926 6.47399 13.2144C8.17005 11.692 11.3965 8.36525 11.3965 6.28647C11.3935 3.56909 9.1914 1.36702 6.47399 1.36392Z"/>
        <path d="M6.47396 8.77605C5.099 8.77605 3.98438 7.66143 3.98438 6.28646C3.98438 4.9115 5.099 3.79688 6.47396 3.79688C7.84893 3.79688 8.96355 4.9115 8.96355 6.28646C8.96355 7.66143 7.84895 8.77605 6.47396 8.77605ZM6.47396 5.04164C5.78648 5.04164 5.22917 5.59896 5.22917 6.28644C5.22917 6.97392 5.78648 7.53123 6.47396 7.53123C7.16145 7.53123 7.71876 6.97392 7.71876 6.28644C7.71876 5.59896 7.16147 5.04164 6.47396 5.04164Z"/>
    </svg>
  )
}
