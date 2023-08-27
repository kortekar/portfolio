#include<stdio.h>

int main(){
    int ph_num,cus_id;
    char cus_name[50];

    int soap,hair_cream,hair_spary,spray;
    int sugar,rice,wheat,tea;
    int pepsi,sprite,coke;
    int total,cos_total,groc_total,brev_total;



    printf("_______________________\n");
    printf("\tBilling system\t\n");
    printf("_______________________\n");
    printf("Customer Details\t\n\n");
    printf("Customer name: ");
    scanf("%s", cus_name);
    printf("Phone-no:");
    scanf("%d\n",&ph_num);
    printf("Customer id:");
    scanf("%d\n",&cus_id);
    printf("_______________________\n");
    printf("\tCosmetics\n");
    printf("_______________________\n");
    printf("Soap ( 10rs):");
    scanf("%d\n",&soap);
    printf("Hair cream ( 20rs):");
    scanf("%d\n",&hair_cream);
    printf("Hair spray ( 30rs):");
    scanf("%d\n",&hair_spary);

    printf("_______________________\n");
    printf("\tGroceries\n");
    printf("_______________________\n");
    printf("Suger  ( 30rs/kg):");
    scanf("%d\n",&sugar);
    printf("Rice ( 50rs/kg):");
    scanf("%d\n",&rice);
    printf("Wheat ( 45rs/kg):");
    scanf("%d\n",&wheat);
    printf("Tea ( 120rs/kg):");
    scanf("%d\n",&tea);

    printf("_______________________\n");
    printf("\tBeverages\n");
    printf("_______________________\n");
    printf("Pepsi ( 45rs/l):");
    scanf("%d\n",&pepsi);
    printf("Sprite ( 45rs/l):");
    scanf("%d\n",&sprite);
    printf("Coke ( 45rs/l):");
    scanf("%d\n",&coke);
    printf("_______________________\n");
    printf("_______________________\n");
    cos_total= (soap*10)+(hair_cream*20)+(hair_spary*30);
    groc_total= (sugar*30)+(rice*50)+(wheat*45)+(tea*120);
    brev_total= (pepsi*45)+(sprite*45)+(coke*45);
    total=cos_total+groc_total+brev_total;
    printf("cosmetic total:\t%d\n",cos_total);
    printf("groceries total:\t%d\n",groc_total);
    printf("breverage total:\t%d\n",brev_total);
    printf("_______________________\n");
    printf("Total bill:\t%d\n",total);
    printf("_______________________\n");
    printf("_______________________\n");
 


}
