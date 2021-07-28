package services;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;

@Entity
public class Stockexchange {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long Id;

    public String StockExchange;
    public String Brief;
    public String Contact;
    public String Remarks;


}
