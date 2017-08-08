package metier.entities;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "emprunt", catalog = "biblio")
public class Emprunt implements java.io.Serializable {

	
	private int isbn;
	private  int  code;
	private Date dateemp;
	private Date dateRetour;

	public Emprunt() {
	}

	public Emprunt(int isbn, int code,Date d,Date d1) {
		this.isbn = isbn;
		this.code = code;
		this.dateemp = d;
		this.dateRetour = d1;
		
	}
	@Id
	@Column(name = "ISBN", nullable = false)
	public int getIsbn() {
		return this.isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	@Column(name = "CODE", nullable = false)
	public int getCode() {
		return this.code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DATERETOUR", length = 10)
	public Date getDateemp() {
		return this.dateemp;
	}

	public void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}
	@Temporal(TemporalType.DATE)
	@Column(name = "DATEEMP", length = 10)
	public Date getDateRetour() {
		return this.dateRetour;
	}

	public void setDateemp(Date dateemp) {
		this.dateemp = dateemp;
	}
	
	
	
}
