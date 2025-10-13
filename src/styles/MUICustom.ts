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
  }
};
export const colorStatus: {
  [key: string]: { backgroundColor: string; color: string };
} = {
  InProgress: {
    backgroundColor: '#002fff1e',
    color: '#002fffff',
  },
  NotStarted: {
    backgroundColor: '#ed46622a',
    color: '#ed4662',
  },
  Completed: {
    backgroundColor: 'rgba(0, 128, 0, 0.20)',
    color: 'green',
  },
  
};
export const tablistStyle = {
  width: 'fit-content',
  gap: 1,

  '& > [role="tab"]': {
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '0.8rem',
    color: '#282c34',
    transition: 'all 0.3s ease-in-out',

    '&[aria-selected="true"]': {
      bgcolor: '#ed466217',
      color: '#ed4662',
      fontWeight: '600',
      '&:hover': {
        bgcolor: '#ed46624b',
        color: '#ed4662',
        fontSize: '0.85rem',
      },
    },

    '&:hover': {
      bgcolor: '#282c3438',
      color: '#282c34',
      fontSize: '0.85rem',
    },
  },
};
export const textFieldStyles = {
  marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    color: '#282c34',
    //   backgroundColor: "#f5f5f5",
    borderRadius: '12px',
    transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
    minWidth: '300px',
    '& input[type=number]': {
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        display: 'none',
      },
      '&::-webkit-inner-spin-button': {
        display: 'none',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ed4662',
      borderWidth: '2px',
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ed4662',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ed4662',
      borderWidth: '2px',
    },
    '& .MuiOutlinedInput-input': {
      // padding: "12px 12px",
      color: '#282c34',
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: "'Roboto', sans-serif",
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: '#a0a0a0',
      opacity: 0.8,
      fontWeight: '400',
    },
    '& .MuiInputAdornment-root': {
      color: '#282c34',
    },
  },
  '.MuiOutlinedInput-root.Mui-focused': {
    backgroundColor: 'transparent',
  },
  '.MuiOutlinedInput-root.Mui-error': {
    backgroundColor: '#d32f2f15',
  },
  '.MuiOutlinedInput-root.Mui-error.Mui-focused': {
    backgroundColor: 'transparent',
  },
  '& .MuiInputLabel-outlined': {
    color: '#282c34',
    fontSize: '14px',
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#ed4662',
  },
  '& .MuiInputLabel-outlined.Mui-error': {
    color: '#d32f2f',
  },
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d32f2f',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontSize: '0.7rem',
    color: '#d32f2f',
    marginLeft: '1rem',
    marginBottom: '-0.4rem',
  },
  '& .MuiInputLabel-outlined.Mui-success': {
    color: '#388e3c', // Success label color (green)
  },
  '& .MuiOutlinedInput-root.Mui-success .MuiOutlinedInput-notchedOutline': {
    borderColor: '#388e3c', // Success border color (green)
  },
  '& .MuiFormHelperText-root.Mui-success': {
    fontSize: '0.7rem',
    color: '#388e3c', // Success helper text color (green)
    marginLeft: '1rem',
    marginBottom: '-0.4rem',
  },
};
export const modalStyle = {
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%, -50%)',
  bgcolor:'background.paper',
  boxShadow:24,
  minWidth:400,
  outline:'none',
  borderRadius: '12px',
  p:4,
};