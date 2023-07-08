package state

type Column interface {
	IsColumn()
}

func (c *BackgroundImageColumn) IsColumn() {}
func (c *ImageDecriptionColumn) IsColumn() {}
