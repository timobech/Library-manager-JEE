package metier;

import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import metier.entities.Emprunt;
import metier.entities.Reservation;
import util.HibernateUtil;

public class empruntDaoImpl implements empruntDao {

	public void addEmprunt(Emprunt emp) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		try {
			session.save(emp);
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
		}
		session.getTransaction().commit();
	}

	public void updateEmprunt(Emprunt e) {
		// TODO Auto-generated method stub
		
	}

	public List<Emprunt> ListEmprunt() {
		// TODO Auto-generated method stub
		return null;
	}

	public Emprunt getEmprunt(int id) {
		Session session =HibernateUtil.getSessionFactory().getCurrentSession();
		session.beginTransaction();
		Object p= session.get(Emprunt.class,id);
		if(p==null) throw new RuntimeException("Utilisateur introuvable");
		session.getTransaction().commit();
		return (Emprunt)p;
	}

	public void deleteEmprunt(Long id) {
		// TODO Auto-generated method stub
		
	}
	
}
