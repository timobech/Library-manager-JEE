package metier;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import metier.entities.Reservation;

import util.HibernateUtil;


public class reservDaoImpl implements reservDao {

	public void addReserv(Reservation p) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		try {
			session.save(p);
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
		}
		session.getTransaction().commit();
	}

	
	public List<Reservation> ListReserv() {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Query req= session.createQuery("select p from Reservation p");
		List<Reservation> prods =req.list();
		session.getTransaction().commit();
		return prods;
		
	}

	
	public Reservation getReserv(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Reservation.class,id);
		if(p==null) throw new RuntimeException("Utilisateur introuvable");
		session.getTransaction().commit();
		return (Reservation)p;
	}

	
	/*public List<Utilisateur> getUserParMC(String mc) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Query req= session.createQuery("select p from Produit p where p.designation Like :x");
		req.setParameter("x","%"+mc+"%");
		List<Utilisateur> prods =req.list();
		session.getTransaction().commit();
		return prods;
		
	}*/

	
	public void deleteReserv(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Reservation.class,id);
		if(p==null) throw new RuntimeException("Utilisateur introuvable");
		session.delete(p);
		session.getTransaction().commit();
	
		
	}


	public void updateReserv(Reservation p) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		session.update(p);
		session.getTransaction().commit();
		
	}







}
