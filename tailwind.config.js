/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
     
    },
    fontFamily: {
        
            'Creepster-Regular': ['Creepster-Regular', 'cursive'],

            'DMSerifDisplay-Regular': ['DMSerifDisplay-Regular', 'serif'],
            'DMSerifDisplay': ['DM Serif Display-italic', 'serif'],
            'EmilysCandy-Regular': ['EmilysCandy-Regular', 'cursive'],
            'Iceberg-Regular': ['Iceberg-Regular', 'cursive'],
            'Itim-Regular': ['Itim-Regular, cursive'],
            'LibreBaskerville-Regular': ['LibreBaskerville-Regular', 'serif'],
            'MetalMania-Regular': ['MetalMania-Regular', 'cursive'],
             'Nosifer-Regular': ['Nosifer-Regular', 'cursive'],
             'Orbitron-VariableFont_wght': ['Orbitron-VariableFont_wght', 'sans-serif'],

         
             'PTSerif-Italic': ['PTSerif-Italic', 'serif'],
             'PTSerif-Regular': ['PTSerif-Regular', 'serif'],
             'Rye-Regular': ['Rye-Regular', 'cursive'],
             'Sansita-Italic': ['Sansita-Italic', 'sans-serif'],
             'Sansita-Regular': ['Sansita-Regular', 'sans-serif'],
              'Sixtyfour-Regular-VariableFont': ['Sixtyfour-Regular-VariableFont', 'cursive'],
              'Sixtyfour-Regular': ['Sixtyfour-Regular', 'cursive'],
              'Yellowtail-Regular': ['Yellowtail-Regular', 'cursive'],
            
            
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
