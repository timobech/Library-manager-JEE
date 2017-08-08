package web;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

import metier.reservDaoImpl;
import metier.entities.Reservation;

@ManagedBean(name="Reserver")
@ViewScoped


public class ReControler {
	public Reservation reserv = new Reservation();
	public String passedParameter;
	public ReControler() {
		// TODO Auto-generated constructor stub
	}
	@PostConstruct
	public void init(){
		reserv.setCode(1);
		int t = Integer.parseInt(getPassedParameter(),10);
		reserv.setIsbn(t);
		
		System.out.println(reserv.getIsbn());
	}
	public String Reserv()
	{
		
		reservDaoImpl r = new reservDaoImpl();

		try {
			
			r.addReserv(reserv);
			System.out.println("addReserv éxécuté");
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
		return "index.jsp";
	}
	public String getPassedParameter() { 
		   FacesContext facesContext = FacesContext.getCurrentInstance();
		   this.passedParameter = (String) facesContext.getExternalContext().getRequestParameterMap().get("isbn");
		   return this.passedParameter; 
		   }  
		  
		   public void setPassedParameter(String passedParameter) {
		   this.passedParameter = passedParameter; 
		   }
}
