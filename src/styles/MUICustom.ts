export const tableStyle = {
  borderRadius: 'lg',
  boxShadow: 'sm',
  '& th': {
    backgroundColor: '#ed4662',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  '& td': {
    textAlign: 'center',
  },
  '& thead tr:first-of-type th:first-of-type': {
    borderTopLeftRadius: '12px',
  },
  '& thead tr:first-of-type th:last-of-type': {
    borderTopRightRadius: '12px',
  },
  // '& thead':{
  //     backgroundColor:'#ed7d31',
  //     color: 'white',

  // }
};