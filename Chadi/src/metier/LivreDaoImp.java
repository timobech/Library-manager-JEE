package metier;


import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import metier.entities.Livre;

import util.HibernateUtil;


public class LivreDaoImp implements LivreDao  {

	public void addLivre(Livre p) {
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

	
	public List<Livre> ListLivre() {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Query req= session.createQuery("select p from Utilisateur p");
		List<Livre> prods =req.list();
		session.getTransaction().commit();
		return prods;
		
	}

	
	public Livre getLivre(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Livre.class,id);
		if(p==null) throw new RuntimeException("Livre introuvable");
		session.getTransaction().commit();
		return (Livre)p;
	}

	
	public List<Livre> getLivrePar(String mc) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Query req= session.createQuery("select p from Livre p where p.titre Like :x OR p.auteur Like :x ");
		req.setParameter("x","%"+mc+"%");
		List<Livre> prods =req.list();
		session.getTransaction().commit();
		return prods;
		
	}

	
	public void deleteLivre(Long id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Livre.class,id);
		if(p==null) throw new RuntimeException("Livre introuvable");
		session.delete(p);
		session.getTransaction().commit();
	
		
	}


	public void updateLivre(Livre p) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		session.update(p);
		session.getTransaction().commit();
		
	}







	





}
