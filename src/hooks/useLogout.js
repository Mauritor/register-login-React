//import React, { useEffect } from 'react';

const useLogout =  () => { 
        localStorage.removeItem('token');
        window.location.href = '/loginHookForm'  
}

export default useLogout