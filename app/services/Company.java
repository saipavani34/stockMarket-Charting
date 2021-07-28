package services;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import  javax.persistence.*;


@Entity
public class Company{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;

    public String Name;

    public String TurnOver;

    public String CEO;
    public String BOD;

    public String Sector;
    public String Description;
    public String IPO;

}
