package services;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ipo {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;

    public String CompanyName;

    public String StockExchange;

    public int PricePerShare;
    public int TotalShares;
    public String OpenDateTime;
    public String Remarks;
}
