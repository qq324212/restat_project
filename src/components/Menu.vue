<template> 
<v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
  <v-container fluid="true">
     <v-card elevation="24">
         
         <v-container> 
         <v-row  >
             <v-col cols="12" md="5" v-for="item in menuItems" :key=item>
                 <v-card>
                     <v-card color="black">
                         <v-card-item>
                             <v-card-title>{{ item.name }}</v-card-title>

                             <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                         </v-card-item>
                         <v-img height="200px" src="https://img.freepik.com/free-vector/vintage-healthy-food-menu-template-theme_23-2148500576.jpg?t=st=1739952668~exp=1739956268~hmac=c155f12738d361f31fac68d7957c1973d94a9632e415180b8d66f56099683ef5&w=996" cover ></v-img>

                         <v-card-text>
                         {{ item.price }}
                         </v-card-text>
                     </v-card>
                     
                 </v-card>
                 
             </v-col>
         </v-row>
         </v-container>
     </v-card>
  </v-container>  
</template>


<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    }
]
</script>