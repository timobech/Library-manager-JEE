import java.util.List;

import metier.userDaoImp;
import metier.entities.Utilisateur;



public class TestMetier {

	public static void main(String[] args) {
		userDaoImp metier = new userDaoImp();
		
		
		metier.addUser(new Utilisateur("tyu","yui","hjk","ghjk","hjk"));

		List<Utilisateur> prods=metier.ListUser();
        for(Utilisateur k:prods){
        	System.out.println(k.getNom());
        }
        System.out.println("-------------");

       /* List<Produit> prods1=metier.getProduitsParMC("y");
        for(Produit k1:prods1){
        	System.out.println(k1.getDesignation());
        }
        System.out.println("-------------");*/
       /* Produit p=metier.getProduit(1L);
        System.out.println(p.getDesignation());
        System.out.println(p.getPrix());
        System.out.println(p.getQuantite());
        
        
        System.out.println("---------------------");*/
       /* p.setDesignation("hh");
        p.setPrix(1111);
        System.out.println(p.getDesignation());
        metier.updateProduit(p);*/ 
        
        System.out.println("---------------------");
        //metier.deleteProduit(2L);
	}

}
