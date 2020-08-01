import styled from 'styled-components'

const Spiner = styled.div`
    border-radius: 50%;
    border-top: 3px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
    
    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default Spiner