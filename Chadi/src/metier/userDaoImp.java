package metier;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;


import metier.entities.Utilisateur;
import util.HibernateUtil;


public class userDaoImp implements userDao {

	public void addUser(Utilisateur p) {
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

	
	public List<Utilisateur> ListUser() {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Query req= session.createQuery("select p from Utilisateur p");
		List<Utilisateur> prods =req.list();
		session.getTransaction().commit();
		return prods;
		
	}

	
	public Utilisateur getUser(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Utilisateur.class,id);
		if(p==null) throw new RuntimeException("Utilisateur introuvable");
		session.getTransaction().commit();
		return (Utilisateur)p;
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

	
	public void deleteUser(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Utilisateur.class,id);
		if(p==null) throw new RuntimeException("Utilisateur introuvable");
		session.delete(p);
		session.getTransaction().commit();
	
		
	}


	public void updateUser(Utilisateur p) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		session.update(p);
		session.getTransaction().commit();
		
	}






}
