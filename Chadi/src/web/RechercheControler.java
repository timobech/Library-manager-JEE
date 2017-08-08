package web;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.ExternalContextFactory;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;

import metier.LivreDao;
import metier.LivreDaoImp;
import metier.reservDao;
import metier.reservDaoImpl;
import metier.empruntDao;
import metier.empruntDaoImpl;
import metier.entities.Emprunt;
import metier.entities.Livre;
import metier.entities.Reservation;

@ManagedBean(name="RechercheBean")
@RequestScoped

public class RechercheControler{
	
	public String rechercheIn ;
	public LivreDaoImp livre = new LivreDaoImp();
	public List<Livre> listLivre;
	private ArrayList<Livre> rsLivre = new ArrayList<Livre>();
	public Livre liv ;
	public Reservation reserv = new Reservation();
	public Emprunt emp  = new Emprunt();
	private String passedParameter ;
	
	/*************************************************************************/   
	@PostConstruct
	public void init(){
		LivreDaoImp ld = new LivreDaoImp();
		
		System.out.println(getPassedParameter());
		int t = 0;
		if(getPassedParameter()!=null){
			t = Integer.parseInt(getPassedParameter(),10);
			setLiv(livre.getLivre(t));
			//reserv = new Reservation();
			reservDaoImpl r = new reservDaoImpl();
			empruntDaoImpl em = new empruntDaoImpl();
			//Reservation res = r.getReserv(t);
		//	Emprunt emp1 = em.getEmprunt(t);
			Livre l = ld.getLivre(t);
			//if(res==null && emp1==null)
		//	{
				if(l.getNbrexemplaire()==0){
					reserv.setCode(1);
					reserv.setIsbn(getLiv().getIsbn());
					try {
					
						r.addReserv(reserv);
						System.out.println("addReserv éxécuté");
					}
					catch(Exception e){
						System.out.println(e.getMessage());
					}
				}
				else
				{
					Date dNow = new Date( );
				     /* SimpleDateFormat ft = 
				      new SimpleDateFormat ("yyyy-MM-dd");*/
					emp.setCode(1);
					emp.setIsbn(getLiv().getIsbn());
					emp.setDateRetour(dNow);
					Calendar c = Calendar.getInstance(); 
					c.setTime(dNow); 
					c.add(Calendar.DATE, 15);
					dNow = c.getTime();
					emp.setDateemp(dNow);
					try {
					
					em.addEmprunt(emp);
						System.out.println("addEmprunt éxécuté");
					}
					catch(Exception e){
						System.out.println(e.getMessage());
					}
				}
			//}
		
	}}
	/*********************************************************/
	public String getPassedParameter() { 
	   FacesContext facesContext = FacesContext.getCurrentInstance();
	   this.passedParameter = (String) facesContext.getExternalContext().getRequestParameterMap().get("isbn");
	   return this.passedParameter; 
	   }  
	  
	   public void setPassedParameter(String passedParameter) {
	   this.passedParameter = passedParameter; 
	   }
	
	/**************************************************/
	public ArrayList<Livre> getRsLivre() {
		return this.rsLivre;
	}

	public void setRsLivre(ArrayList<Livre> rsLivre) {
		this.rsLivre = rsLivre;
	}

	public List<Livre> getlistLivre() {
		return listLivre;
	}

	public void setlistLivre(List<Livre> listLivre) {
		this.listLivre = listLivre;
	}
	/*****************************************************/
	
	
	/***--------------------------------------------*/
	
	public String ListRecherche(){
     listLivre = livre.getLivrePar(this.getRechercheIn()) ;
	 
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
				this.rsLivre.add(liv);
				
			System.out.println("Livre " + l.getResume() +"\n"+this.rsLivre.get(0).getTitre());
			
		}
		return "Resultat.jsp";
		
	}
	/*************************************************/
	
	
	public Livre getLiv()
	{
		return this.liv;
	}
	public void setLiv(Livre l)
	{
		this.liv = l ;
	}
	public Reservation getReserv()
	{
		return this.reserv;
	}
	public void setReserv(Reservation r)
	{
		this.reserv= r ;
	}
	public Emprunt getEmp()
	{
		return this.emp;
	}
	public void setEmp(Emprunt e)
	{
		this.emp = e ;
	}
	/************************************************************************/
	
	public String Reserver()
	{
		
		
		/*System.out.println(reserv.getIsbn());
		String viewId = FacesContext.getCurrentInstance().getViewRoot().getViewId();
	    
		try {
			
			r.addReserv(reserv);
			System.out.println("addReserv éxécuté");
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}*/
		return "reserv.jsp";
	}
	public String Emprunter()
	{
		return "emprunt.jsp";
	}
	
	
	
	/************************************************/

	public String getRechercheIn() {
		return rechercheIn;
	}

	public void setRechercheIn(String rechercheIn) {
		this.rechercheIn = rechercheIn;
	}
	

}
