package metier;


import java.util.List;

import metier.entities.Livre;
public interface LivreDao {
	public void addLivre(Livre p);
	public List<Livre> ListLivre();
	public Livre getLivre(int id);
	public List<Livre> getLivrePar(String mc);
	public void deleteLivre(Long id);
	public void updateLivre(Livre p);
	

}