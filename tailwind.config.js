/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
     
    },
    fontFamily: {
        
            'Creepster-Regular': ['Creepster-Regular', 'cursive'],

        
            'EmilysCandy-Regular': ['EmilysCandy-Regular', 'cursive'],
            'Iceberg-Regular': ['Iceberg-Regular', 'cursive'],
            'Itim-Regular': ['Itim-Regular, cursive'],
            'LibreBaskerville-Regular': ['LibreBaskerville-Regular', 'serif'],
            'MetalMania-Regular': ['MetalMania-Regular', 'cursive'],
             'Nosifer-Regular': ['Nosifer-Regular', 'cursive'],
             'Orbitron-VariableFont_wght': ['Orbitron-VariableFont_wght', 'sans-serif'],

         
         
              
       
      
            
            
			},

    screens: {
      xxxs: "250px",
      xxs: "320px",
      xs: "420px",
      sm: "460px",
      md: "685px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
  },
};

export const plugins = [];
