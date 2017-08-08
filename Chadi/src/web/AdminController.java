package web;

import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import metier.LivreDaoImp;
import metier.empruntDaoImpl;
import metier.reservDaoImpl;
import metier.userDaoImp;
import metier.entities.Emprunt;
import metier.entities.Livre;
import metier.entities.Reservation;
import metier.entities.Utilisateur;

@ManagedBean(name="AdminBean")
@SessionScoped


public class AdminController {
	
	public LivreDaoImp livDao = new LivreDaoImp();
	public LivreDaoImp liv2 = new LivreDaoImp();
	public List<Livre> listLivre = new ArrayList<Livre>();
	public List<Livre> rsLivre = new ArrayList<Livre>();
	
	public reservDaoImpl reservDao = new reservDaoImpl();
	public List<Reservation> listReserv = new ArrayList<Reservation>();
	public List<Reservation> rsReserv = new ArrayList<Reservation>();
	
	public userDaoImp userImp = new userDaoImp();
	public userDaoImp user2 = new userDaoImp();
	public List<Utilisateur> listUser = new ArrayList<Utilisateur>();
	public List<Utilisateur> rsUser = new ArrayList<Utilisateur>();
	
	public empruntDaoImpl emprImp = new empruntDaoImpl();
	public userDaoImp empr2 = new userDaoImp();
	public List<Emprunt> listEmpr = new ArrayList<Emprunt>();
	public List<Emprunt> rsEmpr = new ArrayList<Emprunt>();
	
	public reservDaoImpl del = new reservDaoImpl();
	public int reserv =0;
			
			
			
	public reservDaoImpl getDel() {
		return del;
	}


	public void setDel(reservDaoImpl del) {
		this.del = del;
	}


	public int getReserv() {
		return reserv;
	}


	public void setReserv(int reserv) {
		this.reserv = reserv;
	}


	public List<Reservation> ListReserv(){
		

		
	//	System.out.println(metier.ListLivre());
		
		listReserv = reservDao.ListReserv();
		
		for(Reservation l:listReserv){
			
			Reservation liv = new Reservation();
			
			liv.setIsbn(l.getIsbn());
			liv.setCode(l.getCode());
			System.out.println("Utilisateur :" + user2.getUser(l.getCode()).getNom());
			System.out.println("Livre de :"+ l.getIsbn() );
			System.out.println("Livre de :"+ l.getCode());
			
			rsReserv.add(liv);
		}
		
		return rsReserv;
	
	}
	
	public List<Emprunt> ListEmprunt(){
		

		
		//	System.out.println(metier.ListLivre());
			
			listReserv = reservDao.ListReserv();
			
			for(Emprunt l:listEmpr){
				
				Emprunt liv = new Emprunt();
				
				liv.setIsbn(l.getIsbn());
				liv.setCode(l.getCode());
				liv.setDateemp(l.getDateemp());
				System.out.println("Utilisateur :" + user2.getUser(l.getCode()).getNom());
				System.out.println("Livre de :"+ l.getIsbn() );
				System.out.println("Livre de :"+ l.getCode());
				
				rsEmpr.add(liv);
			}
			
			return rsEmpr;
		
		}
	
	
	
	public List<Utilisateur> ListUtilisateur(){
		
		listUser = userImp.ListUser();
		
		for(Utilisateur s:listUser){
			
			
			Utilisateur tab = new Utilisateur();
			
			
			tab.setNom(s.getNom());
			tab.setNom(s.getPrenom());
			//tab.setTitre(s.getEmail());
			tab.setEmail(s.getEmail());
			
			rsUser.add(tab);		
			
			System.out.println(" Utilisateur :"+ s.getNom());
		} 
		
		this.setRsUser(rsUser);
		return listUser;
	
	}

	public void deleteRes(int t){
		
		del.deleteReserv(t);
	}

	public userDaoImp getUserImp() {
		return userImp;
	}

	public void setUserImp(userDaoImp userImp) {
		this.userImp = userImp;
	}

	public List<Utilisateur> getListUser() {
		return listUser;
	}

	public void setListUser(List<Utilisateur> listUser) {
		this.listUser = listUser;
	}

	public List<Utilisateur> getRsUser() {
		this.ListUtilisateur();
		return rsUser;
	}

	public void setRsUser(List<Utilisateur> rsUser) {
		this.rsUser = rsUser;
	}
/*
	public reservDaoImpl getRes() {
		return res;
	}



	public void setRes(reservDaoImpl res) {
		this.res = res;
	}



	public List<TabReserv> getListReserv() {
		return listReserv;
	}



	public void setListReserv(List<TabReserv> listReserv) {
		this.listReserv = listReserv;
	}



	public List<TabReserv> getRsReserv() {
		this.ListReserv();
		return rsReserv;
	}



	public void setRsReserv(List<TabReserv> rsReserv) {
		this.rsReserv = rsReserv;
	}
	*/



	public LivreDaoImp getLivDao() {
		return livDao;
	}



	public void setLivDao(LivreDaoImp livDao) {
		this.livDao = livDao;
	}



	public List<Livre> getListLivre() {
		return listLivre;
	}



	public void setListLivre(List<Livre> listLivre) {
		this.listLivre = listLivre;
	}



	public List<Livre> getRsLivre() {
		return rsLivre;
	}



	public void setRsLivre(List<Livre> rsLivre) {
		this.rsLivre = rsLivre;
	}



	public reservDaoImpl getReservDao() {
		return reservDao;
	}



	public void setReservDao(reservDaoImpl reservDao) {
		this.reservDao = reservDao;
	}



	public List<Reservation> getListReserv() {
		return listReserv;
	}



	public void setListReserv(List<Reservation> listReserv) {
		this.listReserv = listReserv;
	}



	public List<Reservation> getRsReserv() {
		return rsReserv;
	}



	public void setRsReserv(List<Reservation> rsReserv) {
		this.rsReserv = rsReserv;
	}



	public LivreDaoImp getLiv2() {
		return liv2;
	}


	public void setLiv2(LivreDaoImp liv2) {
		this.liv2 = liv2;
	}


	public userDaoImp getUser2() {
		return user2;
	}



	public void setUser2(userDaoImp user2) {
		this.user2 = user2;
	}
}

/* 
 
 public String ListRecherche(){
		listLivre = livre.getLivrePar(this.getRechercheIn()) ;
		
		// for(int i=0; i<listLivre.size(); i++)
			for(Livre l:listLivre){
			
				Livre liv = new Livre();
				
				liv.setTitre(l.getTitre());
				liv.setResume(l.getResume());
				liv.setAffiche(l.getAffiche());
				liv.setIsbn(l.getIsbn());
				
				////////////// optional
				liv.setAnneesortie(l.getAnneesortie());
				liv.setDateenreg(l.getDateenreg());
				liv.setLangue(l.getLangue());
				liv.setNbrexemplaire(l.getNbrexemplaire());
				
				rsLivre.add(liv);
		
			System.out.println("Livre " + l.getAuteur());
			
		}
		return "Resultat.jsp";
		
	}
 
 *  */
 