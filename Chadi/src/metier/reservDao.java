package metier;
import java.util.List;

import metier.entities.Reservation;



public interface reservDao {
	public void addReserv(Reservation user);
	public void updateReserv(Reservation user);
	public List<Reservation> ListReserv();
	public Reservation getReserv(int Id);
	public void deleteReserv(int id);
}
