package metier;

import java.util.List;
//import metier.entities.Produit;
import metier.entities.Utilisateur;
public interface userDao {
	public void addUser(Utilisateur p);
	public List<Utilisateur> ListUser();
	public Utilisateur getUser(int id);
	//public List<Produit> getProduitsParMC(String mc);
	public void deleteUser(int id);
	public void updateUser(Utilisateur p);
	

}