package metier;

import java.util.List;

import metier.entities.Emprunt;
import metier.entities.Reservation;

public interface empruntDao {
	public void addEmprunt(Emprunt user);
	public void updateEmprunt(Emprunt user);
	public List<Emprunt> ListEmprunt();
	public Emprunt getEmprunt(int Id);
	public void deleteEmprunt(Long id);
}
