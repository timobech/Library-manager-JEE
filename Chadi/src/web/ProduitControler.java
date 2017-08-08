package web;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;

import metier.LivreDaoImp;
import metier.userDaoImp;
import metier.entities.Livre;
import metier.entities.Utilisateur;

@ManagedBean(name="produitcontroler")
@RequestScoped
public class ProduitControler implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public  Utilisateur p = new Utilisateur();
	public userDaoImp metier =  new userDaoImp();
	
	public Livre liv = new Livre();
	public LivreDaoImp getLivre() {
		return livre;
	}
	public void setLivre(LivreDaoImp livre) {
		this.livre = livre;
	}
	public LivreDaoImp livre = new LivreDaoImp();
	
	
	public Utilisateur getP() {
		return p;
	}
	public void setP(Utilisateur p) {
		this.p = p;
	}
	public userDaoImp getMetier() {
		return metier;
	}
	public void setMetier(userDaoImp metier) {
		this.metier = metier;
	}

	public  String Add(){
		
		try{
		metier.addUser(new Utilisateur(this.p.getNom(),this.p.getPrenom(),this.p.getLogin(),this.p.getPassword(),this.p.getEmail()));
		System.out.println("Ajout avec succes");
		}catch(Exception e){
			System.out.println(" zaaml bjehd ! ");
		}
		
	return "Insertion ::: ";
	}
	
public Livre getLiv() {
		return liv;
	}
	public void setLiv(Livre liv) {
		this.liv = liv;
	}
public  String AddLivre(){
		
		try{
		livre.addLivre(new Livre(this.liv.getIsbn(),this.liv.getTitre(),this.liv.getLangue(),this.liv.getNbrpages(),this.liv.getResume(),this.liv.getAnneesortie(),this.liv.getAuteur(),this.liv.getDateenreg(),this.liv.getNbrexemplaire(), "tariq.jpg",null));
		System.out.println("Ajout avec succes");
		}catch(Exception e){
			System.out.println(" zaaml bjehd ! ");
		}
		
	return "Insertion ::: ";
	}
}
